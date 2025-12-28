// ============================================
// SECURITY UTILITIES
// ============================================
// Built-in security functions for input validation and sanitization
// ============================================

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Trim and limit length
  let sanitized = input.trim().substring(0, maxLength);

  // Remove potentially dangerous characters
  sanitized = sanitized
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .replace(/data:/gi, ''); // Remove data: protocol

  return sanitized;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email.trim()) && email.length <= 255;
}

/**
 * Validate phone number format (basic validation)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') {
    return false;
  }

  // Allow international format: +1234567890 or 1234567890
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Validate file type
 */
export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  if (!file || !file.type) {
    return false;
  }

  return allowedTypes.some(type => {
    if (type.includes('*')) {
      const baseType = type.split('/')[0];
      return file.type.startsWith(baseType + '/');
    }
    return file.type === type;
  });
}

/**
 * Validate file size (in bytes)
 */
export function isValidFileSize(file: File, maxSizeBytes: number): boolean {
  if (!file) {
    return false;
  }

  return file.size <= maxSizeBytes;
}

/**
 * Sanitize file name to prevent path traversal and XSS
 */
export function sanitizeFileName(fileName: string): string {
  if (!fileName || typeof fileName !== 'string') {
    return 'file';
  }

  // Remove path separators and dangerous characters
  let sanitized = fileName
    .replace(/[\/\\]/g, '') // Remove path separators
    .replace(/[<>:"|?*]/g, '') // Remove dangerous characters
    .replace(/\.\./g, '') // Remove parent directory references
    .trim();

  // Limit length
  sanitized = sanitized.substring(0, 255);

  // If empty after sanitization, use default
  if (!sanitized) {
    sanitized = 'file';
  }

  return sanitized;
}

/**
 * Validate and sanitize registration data
 */
export function validateRegistrationData(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  city?: string;
  jobTitle?: string;
  specialty?: string;
  institution?: string;
  registrationType: string;
  abstractSubmitted: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Validate required fields
  if (!data.firstName || data.firstName.trim().length === 0) {
    errors.push('First name is required');
  } else if (data.firstName.length > 100) {
    errors.push('First name must be 100 characters or less');
  }

  if (!data.lastName || data.lastName.trim().length === 0) {
    errors.push('Last name is required');
  } else if (data.lastName.length > 100) {
    errors.push('Last name must be 100 characters or less');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required');
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Invalid phone number format');
  }

  if (data.city && data.city.length > 100) {
    errors.push('City must be 100 characters or less');
  }

  if (data.jobTitle && data.jobTitle.length > 100) {
    errors.push('Job title must be 100 characters or less');
  }

  if (data.specialty && data.specialty.length > 100) {
    errors.push('Specialty must be 100 characters or less');
  }

  if (data.institution && data.institution.length > 200) {
    errors.push('Institution must be 200 characters or less');
  }

  if (!data.registrationType) {
    errors.push('Registration type is required');
  } else {
    const validTypes = ['General Delegate', 'Workshop Delegate', 'Research Presenter', 'Observer'];
    if (!validTypes.includes(data.registrationType)) {
      errors.push('Invalid registration type');
    }
  }

  if (!data.abstractSubmitted) {
    errors.push('Abstract submission status is required');
  } else if (!['Yes', 'No'].includes(data.abstractSubmitted)) {
    errors.push('Abstract submission must be Yes or No');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate file upload
 */
export function validateFileUpload(
  file: File,
  options: {
    maxSizeMB?: number;
    allowedTypes?: string[];
    allowedExtensions?: string[];
  } = {}
): { isValid: boolean; error?: string } {
  const {
    maxSizeMB = 10,
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'],
    allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf'],
  } = options;

  // Check file size
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (!isValidFileSize(file, maxSizeBytes)) {
    return {
      isValid: false,
      error: `File size must be less than ${maxSizeMB}MB`,
    };
  }

  // Check file type
  if (!isValidFileType(file, allowedTypes)) {
    return {
      isValid: false,
      error: `File type not allowed. Allowed types: ${allowedExtensions.join(', ')}`,
    };
  }

  // Check file extension
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
    return {
      isValid: false,
      error: `File extension not allowed. Allowed extensions: ${allowedExtensions.join(', ')}`,
    };
  }

  return { isValid: true };
}

/**
 * Rate limiting helper (client-side, basic)
 * Note: Real rate limiting should be done server-side
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false; // Rate limit exceeded
  }

  // Increment count
  record.count++;
  return true;
}

/**
 * Clean up old rate limit records
 */
export function cleanupRateLimit(): void {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Clean up rate limit store every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(cleanupRateLimit, 5 * 60 * 1000);
}


/**
 * Validates file upload based on size, type, and extension
 */
export function validateFileUpload(
  file: File,
  options: {
    maxSizeMB?: number;
    allowedTypes?: string[];
    allowedExtensions?: string[];
  }
): { isValid: boolean; error?: string } {
  const { maxSizeMB = 10, allowedTypes = [], allowedExtensions = [] } = options;

  // Check file size
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return {
      isValid: false,
      error: `File size exceeds ${maxSizeMB}MB limit`,
    };
  }

  // Check file type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type ${file.type} is not allowed`,
    };
  }

  // Check file extension
  if (allowedExtensions.length > 0) {
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedExtensions.includes(fileExtension)) {
      return {
        isValid: false,
        error: `File extension .${fileExtension} is not allowed`,
      };
    }
  }

  return { isValid: true };
}

/**
 * Sanitizes file name to prevent directory traversal and other security issues
 */
export function sanitizeFileName(fileName: string): string {
  // Remove path separators and dangerous characters
  return fileName
    .replace(/[\/\\]/g, '_') // Replace slashes with underscores
    .replace(/[^a-zA-Z0-9._-]/g, '_') // Replace non-alphanumeric (except . _ -) with underscores
    .substring(0, 255); // Limit length
}

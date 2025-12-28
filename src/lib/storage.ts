import { supabase } from './supabase';
import { validateFileUpload, sanitizeFileName } from './security';

export async function uploadFile(
  file: File,
  bucket: string,
  folder: string,
  fileName: string
): Promise<string | null> {
  try {
    // Validate file before upload
    const validation = validateFileUpload(file, {
      maxSizeMB: 10,
      allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'],
      allowedExtensions: ['jpg', 'jpeg', 'png', 'gif', 'pdf'],
    });

    if (!validation.isValid) {
      console.error('File validation failed:', validation.error);
      throw new Error(validation.error || 'Invalid file');
    }

    // Sanitize file name and extension
    const sanitizedFileName = sanitizeFileName(fileName);
    const fileExt = file.name.split('.').pop()?.toLowerCase() || 'bin';
    
    // Only allow safe extensions
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf'];
    const safeExt = allowedExtensions.includes(fileExt) ? fileExt : 'bin';
    
    const filePath = `${folder}/${sanitizedFileName}_${Date.now()}.${safeExt}`;

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      console.error('Error uploading file:', uploadError);
      return null;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
}







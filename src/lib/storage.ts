import { supabase } from './supabase';

export async function uploadFile(
  file: File,
  bucket: string,
  folder: string,
  fileName: string
): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop();
    const filePath = `${folder}/${fileName}_${Date.now()}.${fileExt}`;

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





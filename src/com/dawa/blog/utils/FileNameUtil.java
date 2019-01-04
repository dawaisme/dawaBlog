package com.dawa.blog.utils;

import java.util.UUID;

public class FileNameUtil {
	//根据UUID生成文件名
	public static String getUUIDFileName() {
		UUID uuid = UUID.randomUUID();
		return uuid.toString().replace("-", "");
	}

	public static String getRealFileName(String context) {
		// Content-Disposition: form-data; name="myfile"; filename="a_left.jpg"
		int index = context.lastIndexOf("=");
		String filename = context.substring(index + 2, context.length() - 1);
		return filename;
	}
	
	public static String getFileType(String fileName){
		//9527s.jpg
		int index = fileName.lastIndexOf(".");
		return fileName.substring(index);
	}
}

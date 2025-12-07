import base64
import glob
import os
from pathlib import Path

# 尋找最新的jpg檔案
temp_dir = os.environ.get('TEMP', 'C:\\Windows\\Temp')
jpg_files = glob.glob(os.path.join(temp_dir, '*.jpg')) + glob.glob(os.path.join(temp_dir, '*.jpeg'))

if jpg_files:
    latest_jpg = max(jpg_files, key=os.path.getctime)
    print(f"找到圖片: {latest_jpg}")
    
    with open(latest_jpg, 'rb') as f:
        image_data = f.read()
        base64_string = base64.b64encode(image_data).decode('utf-8')
        print(f"Base64長度: {len(base64_string)}")
        
        # 寫入檔案供後續使用
        with open('image_base64.txt', 'w') as out:
            out.write(base64_string)
        print("已保存到 image_base64.txt")
else:
    print("找不到jpg檔案")

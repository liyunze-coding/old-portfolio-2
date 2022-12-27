from glob import glob
import os

for img in glob("images/*.jpg"):
    new_image_name = img[:-4] + '.webp'
    os.rename(img, new_image_name)
import os
import shutil

print('moving files...')
dir_list = ["template", "static"]
for dir_name in dir_list:
    try:
        shutil.rmtree(dir_name)
    except:
        pass
    if not os.path.isdir(dir_name):
        os.makedirs(dir_name)
for file in os.listdir("docs/src/.vuepress/dist"):
    if ".html" in file:
        shutil.move(os.path.join("docs/src/.vuepress/dist", file), "template")
for file in os.listdir("docs/src/.vuepress/dist"):
    shutil.move(os.path.join("docs/src/.vuepress/dist", file), "static")
shutil.rmtree("docs/src/.vuepress/dist")

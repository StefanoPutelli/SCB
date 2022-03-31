import csv
from urllib import request
import requests
from bs4 import BeautifulSoup
import json

letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"]

def getCel(link):
    ret = requests.get(link).text
    names = []
    soup = str(BeautifulSoup(ret, 'html.parser').find_all('a')).split("https://celeb-heights.com/celebrity.php?name=")
    for i in soup:
        i = i.split('"')[0]
        names.append(i)
    del names[0]
    return names
def getHight(names):

    headers = ["Name","Height"]

    with open("height.csv","a", encoding='UTF8', newline='') as c:
            writer = csv.writer(c)
            writer.writerow(headers)

    for name in names:
        ret = requests.get("https://celeb-heights.com/celebrity.php?name=" + name).text
        ret = ret.split('itemprop="height" class="height" title="')[1].split('"')[0]
        with open("height.csv","a", encoding='UTF8', newline='') as c:
            writer = csv.writer(c)
            writer.writerow([name.replace("+"," ") ,ret])
            
for let in letter:
    names = getCel("https://celeb-heights.com/celebrities.php?surnames=" + let)
    jsonHight = getHight(names)







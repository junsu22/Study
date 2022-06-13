import requests
from bs4 import BeautifulSoup

indeed_result =requests.get("https://www.indeed.com/jobs?q=python&limit = 50")

indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("div", {"class":"pagination"})
# link 안의 span 찾기
links = pagination.find_all('a')
pages =[]
# span 안의 text 만 가져오기 
for link in links:
    pages.append(link.find("span").string)

pages=pages[0:-1]
print(pages)

# 출력
# ['2', '3', '4', '5']








# 페이지 숫자 전부 가져온것 을 integer로 바꿔줄것 .

import requests
from bs4 import BeautifulSoup

indeed_result =requests.get("https://www.indeed.com/jobs?q=python&limit = 50")

indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("div", {"class":"pagination"})
# link 안의 span 찾기
links = pagination.find_all('a')
pages =[]
# span 안의 text 만 가져오기
for link in links[:-1]:
    pages.append(int(link.string))

max_page = pages[-1]


# 출력
# [2, 3, 4, 5]


# 아래와 같이 수정

import requests
from bs4 import BeautifulSoup

indeed_result =requests.get("https://www.indeed.com/jobs?q=python&limit = 50")

indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("div", {"class":"pagination"})
# link 안의 span 찾기
links = pagination.find_all('a')
pages =[]
# span 안의 text 만 가져오기
for link in links[:-1]:
    pages.append(int(link.string))

max_page = pages[-1]

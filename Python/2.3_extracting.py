import requests
from bs4 import BeautifulSoup

indeed_result =requests.get("https://www.indeed.com/jobs?q=python&limit = 50")

indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

pagination = indeed_soup.find("div", {"class":"pagination"})

pages = pagination.find_all('a')
spans =[]
for page in pages:
    spans.append(page.find("span"))
#   print(page.find("span"))
# 모든 span 값을 출력한다.
# 마지막 값은 next 마지막값은 없애주어야 하는것 .


print(spans[-1])
# 0부터 시작해서 마지막 까지 


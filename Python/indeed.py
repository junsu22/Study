# import requests
# from bs4 import BeautifulSoup
# INDEED_URL = "https://www.indeed.com/jobs?q=python&limit=50"
# # 들여쓰기 주의 !
# def extract_indeed_pages():
#   indeed_result =requests.get(INDEED_URL)
#   indeed_soup= BeautifulSoup(indeed_result.text, "html.parser")

#   pagination = indeed_soup.find("div", {"class":"pagination"})
#   links = pagination.find_all('a')
#   pages =[]

#   for link in links[:-1]:
#     pages.append(int(link.string))

#   max_page = pages[-1]
#   print(range(max_page))

#   for n in range(max_page):
#     print(f"start={n*50}")


# 코드 정리
# Indeed_ 삭제
import requests
from bs4 import BeautifulSoup
LIMIT = 50
URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}"
# 들여쓰기 주의 !
def extract_indeed_pages():
  result =requests.get(URL)
  soup= BeautifulSoup(result.text, "html.parser")

  pagination = soup.find("div", {"class":"pagination"})
  links = pagination.find_all('a')
  pages =[]

  for link in links[:-1]:
    pages.append(int(link.string))

  max_page = pages[-1]
  print(range(max_page))

  for n in range(max_page):print(f"start={n*50}")
def extract_indeed_jobs(last_page):
    for page in range(last_page):
        print(f"&start={page*50}")
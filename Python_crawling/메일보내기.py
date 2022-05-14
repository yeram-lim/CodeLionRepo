import smtplib
from email.message import EmailMessage

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465

message = EmailMessage()
message.set_content("코드라이언 수업중입니다.")

message["Subject"] = "이것은 제목입니다."
message["From"] = "###@gmail.com"
message["To"] = "###@gmail.com"

# open() - codelion.png / rb
image = open("codelion.png", 'rb')
# 파일을 읽어서 출력해보세요. read()
print(image.read())

# smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
# smtp.login("###@gmail.com","######")
# smtp.send_message(message)
# smtp.quit()
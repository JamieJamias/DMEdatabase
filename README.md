# DMEdatabase

This is a collaboration project between me and the company I work at. 

Current problems:
-Medical supply requisitions are currently done by hand. 
-No way to know what supplies are currently on hand without walking to the supply room. 
-No way to connect supply quantities to staff or patients. 
-Plenty of supplies are being unaccounted for in billing

Goals:
Create a SQL database containing the following:
-Patient name, DOB, insurance
-Nurses' name
-DME name, type (blood, wound, colostomy, etc), brand, quantity, price per unit, quoted price
-Transactions date, nurse, patient, item, quantities

Create a website for users to: (technically I could just use SQL workbench but my coworkers are old)
-look up item quantities
-add item quantities
-input transactions
-view which patients use the most supplies

Lofty goals:
-add user permissions
-create a barcode-scan feature 
-retrieve patient demographics from Kinnser
-create a bill that accounting can use 

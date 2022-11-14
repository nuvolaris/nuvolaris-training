# deploy
nuv action update address/insert address/Insert.java --main=Insert --web=true
nuv action update address/delete address/Delete.java --main=Delete --web=true
nuv action update address/select address/Select.java --main=Select --web=true
# test
nuv invoke address/insert name=Michele phone=392 email=mike
nuv invoke address/select
nuv invoke address/insert name=Mirella phone=328 email=miri
nuv invoke address/select
nuv invoke address/delete id=1
nuv invoke address/select

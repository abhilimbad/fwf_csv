# fwf_csv
convert fixed-width-formatted txt to csv
----------------------------
this pakage export function which takes 3 arguments</br>
1)input fwf filepath</br>
2)outut file path with name and csv extension</br>
3)ranges of headers in txt file(in array)</br>

--------------------------
## example

fix-weidth- column ranges</br>
</br>
RANGES=[[0,25],[30,40],[60,100]]</br>
</br>
0-25  =  first column character range</br>
30-40  =  second column character range</br>
60-100  =  third column character range</br>

fwf_csv('./abc.txt','./out.csv',RANGES)

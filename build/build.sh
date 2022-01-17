CUR=${1:?target file}
if ! test -f "$CUR"
then echo "$CUR does not exist" ; exit 1
fi
DIR=$(dirname "$CUR")
rm -Rvf $DIR/pres
rm -f $DIR/pres.pdf
ipython convert.ipy $CUR

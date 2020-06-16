#!/bin/bash

cat files-to-track| while read f
do
    # strip module name
    local=$(echo $f | sed 's/^[^\/]*\///')

    # create target directory
    d=$(dirname $local)
    mkdir -p $d

    # copy file to target directory
    cp $f $d
done

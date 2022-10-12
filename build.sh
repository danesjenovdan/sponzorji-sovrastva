#!/bin/bash

sudo docker login rg.fr-par.scw.cloud/djnd -u nologin -p $SCW_SECRET_TOKEN

sudo docker build -f Dockerfile -t zradirani:latest .
sudo docker tag zradirani:latest rg.fr-par.scw.cloud/djnd/zradirani:latest
sudo docker push rg.fr-par.scw.cloud/djnd/zradirani:latest
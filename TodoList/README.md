# Dev setup
This app was created using `dotnet new react -o TodoList`
To run the program type:
```
dotnet watch run
```


# Deploy a Docker container
```
cd ClientApp
npm run build

cd ..
docker image build -t pebreo/cnug:4.0 .

docker container run -p 5000:80 --name cnug1 -d cnug:4.0  

docker login 

docker image push pebreo/cnug:4.0 

az login

sub=$(az account show --query "id" -o tsv)
docker-machine create -d azure \
    --azure-subscription-id $sub \
    --azure-location "eastus" \
    --azure-ssh-user azureuser \
    --azure-open-port 80 \
    --azure-resource-group "cnugresourcegroup" \
    --azure-size "Standard_B1ms" \
    cnugmach

eval "$(docker-machine env cnugmach)"
docker-compose up -d
docker-machine ip cnugmach1
```

# Official docs

https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli

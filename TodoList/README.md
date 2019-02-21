# Dev setup
This app was created using `dotnet new react -o TodoList`
To run the program type:
```
# Run a local mssql server 
docker container run --name mssql-dev -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Your_password123' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2017-CU8-ubuntu 

# or multiline
docker container run \
--name mssql-dev \
-e 'ACCEPT_EULA=Y' \ 
-e 'SA_PASSWORD=your_password123' \ 
-p 1433:1433 \
-d mcr.microsoft.com/mssql/server:2017-CU8-ubuntu

Make sure that in connection var in Startup.cs is:
var connection = @"Server=localhost;Database=master;User=sa;Password=Your_password123;";
            
Otherwise it should be:
var connection = @"Server=db;Database=master;User=sa;Password=Your_password123;";

dotnet watch run
```


# Deploy a Docker container
```
cd ClientApp
npm run build

cd ..
docker image build -t pebreo/cnug:<version> .

docker container run -p 5000:80 --name cnug1 -d cnug:<version>  

docker login 

docker image push pebreo/cnug:<version>

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

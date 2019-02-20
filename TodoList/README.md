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
docker image build -t cnug:1.0 

```

# Official docs

https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli

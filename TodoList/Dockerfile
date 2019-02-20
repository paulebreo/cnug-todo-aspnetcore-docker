FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 8080

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["TodoList.csproj", "./"]
RUN dotnet restore "./TodoList.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "TodoList.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "TodoList.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "TodoList.dll"]

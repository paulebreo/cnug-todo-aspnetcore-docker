FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["TodoList.csproj", "./"]
RUN dotnet restore "./TodoList.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "TodoList.csproj" -c Release -o /app

FROM build AS publish
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get install -y build-essential nodejs
RUN dotnet publish "TodoList.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["entrypoint.sh"]

base_url="http://localhost:8080/"
url="$base_url$2"
echo "$url" 

if [ "$1" = "get" ]; then
    curl "$url"
elif [ "$1" = "post" ]; then
    curl -X POST "$url" -H "Content-Type: application/json" -d "$3"
elif [ "$1" = "delete" ]; then
    curl -X DELETE "$url"
else
    "Comando desconhecido"
fi

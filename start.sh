# script para Iniciar con docker automaticamente en linux
# Parar el container
# si esto no funciona proba con test que es el nombre q dice en el json
sudo docker container stop Colored-Byte
sudo docker container rm Colored-Byte

#Correr el container
sudo docker-compose -f docker-compose.prod.yml up --build -d
# Mensaje del que contenedor paro
echo "Colored-Byte esta corriendo"
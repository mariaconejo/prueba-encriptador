# Encriptador de texto - Alura-Oracle Next Education - Challenge 1 - Grupo 4
## **ESPAÑOL**
  ## Descripción

  Este proyecto forma parte del programa ONE (Oracle Next Education) y consiste en un sitio web que sirve para encriptar y desencriptar texto. La consigna era crear un sitio web en base a un modelo que nos dieron en cuál el ususario ingresara un texto y pudiera enriptarlo o desencriptarlo ,obteniéndo así un nuevo texto. 

  ## Consignas

  + Para realizar la encriptación se reemplazan las vocales del texto ingresado:
    - La vocal **'a'** era reemplazada por la palabra **"ai"**.
    - La vocal **'e'** se reemplaza por la palabra **"enter"**.
    - La vocal **'i'** se reemplaza por la palabra **"imes"**.
    - La vocal **'o'** se reemplaza por la palabra **"ober"**.
    - La vocal **'u'** se reemplaza por la palabra **"ufat"**.

  + El texto solo debe contener letras minúsculas y sin tildes.
  + Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. Por ejemplo:
    - `"gato" => "gaitober"`
    - `gaitober" => "gato"`
  +  La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
  + El resultado debe ser mostrado en la pantalla.
  + El diseño de la página web debe ser responsive para los tamaños de pantalla "Tablet" y "Celular" mostrados en el modelo de Figma.
  
  ### Extra
   - Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del `ctrl+C` o de la opción "copiar" del menú de las aplicaciones.
   
   Además del botón de copiar, agregué una `alerta` , que le avise al usuario cuando ingrese un texto no válido para encriptar/desencriptar. También coloque un `div`que avisa al usuario cuando su texto fue copiado.
   
  ## Imágenes del Proyecto.
  
  Esta es la vista previa del proyecto para los distintos dispositivos solicitados:
  
  ### Escritorio sin texto:
  ![Escritorio sin texto](https://lh3.googleusercontent.com/pw/AL9nZEXM4Z4t6ExsmcSFzmBtWEp34PxYIJaOtWRzhMYsNPjd9ZWKrz6UQNwUuSKmZ87iLosEu4XCGeD938ErHjRMCL9qHVG-KGnFIZXx9MWSpnhGGRPTlFkiygbMA_rM8IPRbVhusVvHFV7Ck3-PoSG4lDFb=w1898-h973-no?authuser=0)
  ### Escritorio con texto:
  ![Escritorio con texto](https://lh3.googleusercontent.com/pw/AL9nZEX37HzMJRhX4T0PzVIXr3w-OwCISOuUf-QmnBk3enMAOHZQ68oGxlSXOpWbIuWFwU9zIyvShJjplWhIoDSqhVkrjv71hvhlUWBxTNQb0QBduGx7QtKhggj-pRtx1OitGQPDPT-yysPgaL86IktMPsfi=w1899-h973-no?authuser=0)
  ### Tablet sin texto:
  ![Tablet sin texto](https://lh3.googleusercontent.com/pw/AL9nZEV4kTKhC6AfmITMuAAscMf5mucFF-AsD6xQ5j8wdA6GFI0wEd0E2UxONNsBrtjUo-NF6ixytjXFXnegtjWrzBoRJNZ80p33vLAMiZk6dy_jHKZzLJf79ihEwGeiPbImF0OHCOabsh4PlAeFHU7oY_yH=w381-h584-no?authuser=0)
  ### Tablet con texto:
  ![Tablet con texto](https://lh3.googleusercontent.com/pw/AL9nZEV5KZBx9cvVMdlrtheJrsvfJupf1x59GkiNIGYInZESuHqHVkuzgnbjRFxIV1D1ifKxNCKELg1jrkWbrtgvA74rKrtFovP-cPd7PvBNHF6LRziWLdoqN66-6nOtIADsYeYPVGCvUaPSpz9OU-QMHrZP=w384-h675-no?authuser=0)
  ### Celular sin texto:
  ![Celular sin texto](https://lh3.googleusercontent.com/pw/AL9nZEU-6jf9fjL4JU0O6jQrQVJEYiLrSQUeMqdOpW7v3w-xMswamg5UEW63XkmlOClaMboT5FwjD9BX0HCkJ_p_lyEZbl1Me6OvVS_4sY1Kx81YKWp1jTmW0yfoCxI5S_ixpSsACuvrdIyhpYx5F9uMZooN=w344-h851-no?authuser=0)
  ### Celular con texto:
  ![Celular con texto](https://lh3.googleusercontent.com/pw/AL9nZEVcqPKm92EGZGQUzSTm5cl1Xituvl7Zh-HKeCpK3de1c-zfKEvVv6fKRuCkrSVw-ZgzEjruOWJw-CBuJ4-xNMyEpTmvfEQpcbK7ASaDCg5mfcp8R3Cln6KzcYc4K1xAx5z2AGH3hRVCT_NqyHsPttj8=w279-h852-no?authuser=0)
  
  ## Desencriptando y copiando texto:
  ![Desencripta y copia texto](https://lh3.googleusercontent.com/pw/AL9nZEUb9KyspUz8Ut_txvGUwnLLE9_ChWRbN2vh32Y8PxLcVUnJwNgkxsIEYee04BhCJ9Wb6ckgT4t26ZugwrNXOc3wve3a-0ZsSTw_ruxVJ7TMxz62XH6wh8UcvQzq6dBM0w0eXcv8_adAE3_6yAa0tm8S=w1900-h967-no?authuser=0)
  
  ## Aviso de texto no válido:
  ![texto no valido](https://lh3.googleusercontent.com/pw/AL9nZEVSsC6cBjkjsmx_hxfZUkqTQRfczKabdI0Y_PV9q2ZlU7hBDwbk3ZRU7goaPyGaZRnPDfgxbhMXgnca4LE0UFiXRUhbi22DUgzqdQZSi3O_7BrvcDB3EwMiUWSJ2gP-iAI1ilNr4KejsmD7t9J_AvJa=w1888-h973-no?authuser=0)
  

## **English**
  ## Description

  This project is part of the ONE (Oracle Next Education) program and consists of a website that serves to encrypt and decrypt text. The goal was to create a website based on a model that we were given in which the user could enter a text and could encrypt or decrypt it, thus obtaining a new text. 

  ## Directives:

  + To perform the encryption, the vowels in the entered text are replaced:
    - The vowel **'a'** was replaced by the word **"ai "**.
    - The vowel **'e'** is replaced by the word **"enter "**.
    - The vowel **'i'** is replaced by the word **"imes "**.
    - The vowel **'o'** is replaced by the word **"ober "**.
    - The vowel **'u'** is replaced by the word **"ufat "**.

  + The text must contain only lowercase letters and no accents.
  + It must be possible to convert a word for the encrypted version also return an encrypted word for its original version. For example:
    - `"orange" => "oberraingenter"`.
    - `oberraingenter" => "orange"`.
  + The page must have fields for inserting the text to be encrypted or decrypted, and the user must be able to choose between the two options.
  + The result should be displayed on the screen.
  + The design of the web page must be responsive for the "Tablet" and "Mobile" screen sizes shown in the Figma model.
  
  ### Extra credit
   - A button to copy the encrypted/decrypted text for the transfer section, in other words with the same functionality as `ctrl+C` or the `copy` option in the applications menu.
   
   In addition to the copy button, I added an `alert` , which warns the user when entering an invalid text to encrypt/decrypt. I also placed a `div` that alerts the user when their text was copied.
   
  ## Project Images.
  
  This is the preview of the project for the different devices requested:
    ### Desktop without text:
  ![Desktop without text](https://lh3.googleusercontent.com/pw/AL9nZEXM4Z4t6ExsmcSFzmBtWEp34PxYIJaOtWRzhMYsNPjd9ZWKrz6UQNwUuSKmZ87iLosEu4XCGeD938ErHjRMCL9qHVG-KGnFIZXx9MWSpnhGGRPTlFkiygbMA_rM8IPRbVhusVvHFV7Ck3-PoSG4lDFb=w1898-h973-no?authuser=0)
  ### Desktop with text:
  ![Desktop with text:](https://lh3.googleusercontent.com/pw/AL9nZEX37HzMJRhX4T0PzVIXr3w-OwCISOuUf-QmnBk3enMAOHZQ68oGxlSXOpWbIuWFwU9zIyvShJjplWhIoDSqhVkrjv71hvhlUWBxTNQb0QBduGx7QtKhggj-pRtx1OitGQPDPT-yysPgaL86IktMPsfi=w1899-h973-no?authuser=0)
  ### Tablet without text:
  ![Tablet sin texto](https://lh3.googleusercontent.com/pw/AL9nZEV4kTKhC6AfmITMuAAscMf5mucFF-AsD6xQ5j8wdA6GFI0wEd0E2UxONNsBrtjUo-NF6ixytjXFXnegtjWrzBoRJNZ80p33vLAMiZk6dy_jHKZzLJf79ihEwGeiPbImF0OHCOabsh4PlAeFHU7oY_yH=w381-h584-no?authuser=0)
  ### Tablet with text:
  ![Tablet with text](https://lh3.googleusercontent.com/pw/AL9nZEV5KZBx9cvVMdlrtheJrsvfJupf1x59GkiNIGYInZESuHqHVkuzgnbjRFxIV1D1ifKxNCKELg1jrkWbrtgvA74rKrtFovP-cPd7PvBNHF6LRziWLdoqN66-6nOtIADsYeYPVGCvUaPSpz9OU-QMHrZP=w384-h675-no?authuser=0)
  ### SmartPhone without text:
  ![SmartPhone without text](https://lh3.googleusercontent.com/pw/AL9nZEU-6jf9fjL4JU0O6jQrQVJEYiLrSQUeMqdOpW7v3w-xMswamg5UEW63XkmlOClaMboT5FwjD9BX0HCkJ_p_lyEZbl1Me6OvVS_4sY1Kx81YKWp1jTmW0yfoCxI5S_ixpSsACuvrdIyhpYx5F9uMZooN=w344-h851-no?authuser=0)
  ### SmartPhone with text:
  ![SmartPhone with text](https://lh3.googleusercontent.com/pw/AL9nZEVcqPKm92EGZGQUzSTm5cl1Xituvl7Zh-HKeCpK3de1c-zfKEvVv6fKRuCkrSVw-ZgzEjruOWJw-CBuJ4-xNMyEpTmvfEQpcbK7ASaDCg5mfcp8R3Cln6KzcYc4K1xAx5z2AGH3hRVCT_NqyHsPttj8=w279-h852-no?authuser=0)
  
  ## Decrypting and copying text:
  ![Decrypting and copying text](https://lh3.googleusercontent.com/pw/AL9nZEUb9KyspUz8Ut_txvGUwnLLE9_ChWRbN2vh32Y8PxLcVUnJwNgkxsIEYee04BhCJ9Wb6ckgT4t26ZugwrNXOc3wve3a-0ZsSTw_ruxVJ7TMxz62XH6wh8UcvQzq6dBM0w0eXcv8_adAE3_6yAa0tm8S=w1900-h967-no?authuser=0)
  
  ## Invalid text warning:
  ![Invalid text warning](https://lh3.googleusercontent.com/pw/AL9nZEVSsC6cBjkjsmx_hxfZUkqTQRfczKabdI0Y_PV9q2ZlU7hBDwbk3ZRU7goaPyGaZRnPDfgxbhMXgnca4LE0UFiXRUhbi22DUgzqdQZSi3O_7BrvcDB3EwMiUWSJ2gP-iAI1ilNr4KejsmD7t9J_AvJa=w1888-h973-no?authuser=0)


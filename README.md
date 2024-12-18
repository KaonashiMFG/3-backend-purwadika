# di sini butuh step-step untuk buat server:

## Express JS

### 1. Buat file "src" nya dulu 
#### (mkdir src (dalam root file-nya))

### 2. Untuk buat ts config 
#### (npx typescript -d init)
   **edit**{
   target: _ESNext_
   module: _ESNext_
   outDir: _"./dist"_
   ...yang udh diisi biarin aja.
   }

### 3. Download package.json 
#### ()
   di bagian **script**-nya:
   "build": "tsc", 
    *//buat compile ts jadi js ---> masuknya di **file "dist"***,
   "dev": "npm run build && node dist/index.js", 
    *//jalanin **tsc** dan **file js** yang ada di dist*,
   "test": "echo \"Error: no test specified\" && exit 1",
    *//bisa diapus, dan nanti bakal diedit*

--------------------------------------
NOTES: [
{**TERMINAL LOG**
ealreadyinuse: portnya dah dipake
enaccess: perlu di sudo
enoent: filenya gak ada},

{**HTTP response status codes**
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)}
]

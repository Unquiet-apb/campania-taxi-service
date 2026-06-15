# Pubblicazione Campania Taxi

Dominio ufficiale: `www.campaniataxi.it`

Telefono ufficiale: `+39 389 349 8413`

## Stato attuale

Il sito risponde correttamente su:

- `https://www.campaniataxi.it/`
- `https://www.campaniataxi.it/sitemap.xml`
- `https://www.campaniataxi.it/robots.txt`
- `https://www.campaniataxi.it/taxi-giugliano/`
- `https://www.campaniataxi.it/transfer-aeroporto-napoli/`
- `https://www.campaniataxi.it/ncc-campania/`
- `https://www.campaniataxi.it/tour-costiera-amalfitana/`

Il DNS attuale del `www` punta a Railway:

```txt
www.campaniataxi.it CNAME bnnkr560.up.railway.app
```

Il dominio senza `www`, cioe `campaniataxi.it`, non risolve ancora. Va configurato dal pannello DNS.

## 1. DNS consigliato con Railway

Nel pannello Railway:

1. Apri il progetto del sito.
2. Vai su `Settings` del servizio web.
3. Apri `Networking` / `Custom Domains`.
4. Verifica che esista `www.campaniataxi.it`.
5. Aggiungi anche `campaniataxi.it`.
6. Railway mostrera i record DNS esatti da inserire.

Nel pannello DNS Aruba/Technorail, il `www` deve restare:

```txt
Tipo: CNAME
Nome: www
Valore: bnnkr560.up.railway.app
```

Per il dominio senza `www`, cioe `campaniataxi.it`, usa il record richiesto da Railway.

Se Aruba non permette `CNAME` su `@`, usa una di queste opzioni:

- redirect web da `campaniataxi.it` a `https://www.campaniataxi.it/`
- servizio DNS con CNAME flattening/ALIAS
- Cloudflare come DNS provider, con CNAME flattening attivo

Il server e gia configurato per fare redirect 301 da:

```txt
campaniataxi.it
```

a:

```txt
https://www.campaniataxi.it/
```

appena il DNS dell'apice raggiunge il server.

## 2. Controlli dopo DNS

Controlla questi indirizzi:

- `https://www.campaniataxi.it/`
- `https://www.campaniataxi.it/taxi-giugliano/`
- `https://www.campaniataxi.it/transfer-aeroporto-napoli/`
- `https://www.campaniataxi.it/ncc-campania/`
- `https://www.campaniataxi.it/tour-costiera-amalfitana/`
- `https://www.campaniataxi.it/sitemap.xml`
- `https://www.campaniataxi.it/robots.txt`
- `https://campaniataxi.it/` deve reindirizzare a `https://www.campaniataxi.it/`

## 3. Google Search Console

1. Apri Google Search Console.
2. Aggiungi proprieta dominio: `campaniataxi.it`.
3. Verifica con record DNS TXT.
4. Invia sitemap:

   `https://www.campaniataxi.it/sitemap.xml`

5. Richiedi indicizzazione della homepage e delle pagine principali.

## 4. Google Business Profile

Imposta:

- Nome: `Campania Taxi & Service`
- Sito: `https://www.campaniataxi.it`
- Telefono: `+39 389 349 8413`
- Area servita: Giugliano in Campania, Lago Patria, Napoli, Campania, Costiera Amalfitana
- Descrizione: taxi, NCC, transfer aeroporto Napoli e tour privati in Campania con veicoli Mercedes fino a 9 posti

Carica foto reali:

- Mercedes V-Class blu
- Taxi bianco con insegna TAXI
- Interni beige
- Foto in Costiera Amalfitana
- Foto in aeroporto o davanti hotel

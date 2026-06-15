# Pubblicazione Campania Taxi

Dominio ufficiale: `www.campaniataxi.it`

Telefono ufficiale: `+39 389 349 8413`

## 1. GitHub Pages

Nel repository GitHub `Unquiet-apb/campania-taxi-service`:

1. Vai in `Settings`.
2. Se il repository e ancora privato, rendilo pubblico oppure usa un piano GitHub che abilita Pages private.
3. Vai in `Pages`.
4. In `Build and deployment`, scegli:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Salva.
6. In `Custom domain`, inserisci:

   `www.campaniataxi.it`

7. Attiva `Enforce HTTPS` quando GitHub lo rende disponibile.

Il file `CNAME` e gia presente nel repository e contiene `www.campaniataxi.it`.

## 2. DNS del dominio

Nel pannello DNS del dominio `campaniataxi.it`, aggiungi:

```txt
Tipo: CNAME
Nome: www
Valore: unquiet-apb.github.io
```

Per far funzionare anche `campaniataxi.it` senza `www`, aggiungi gli A record GitHub Pages:

```txt
Tipo: A
Nome: @
Valore: 185.199.108.153

Tipo: A
Nome: @
Valore: 185.199.109.153

Tipo: A
Nome: @
Valore: 185.199.110.153

Tipo: A
Nome: @
Valore: 185.199.111.153
```

Se il provider supporta `ALIAS`, `ANAME` o `CNAME flattening`, puoi usarlo per l'apice del dominio al posto degli A record.

## 3. Dopo la pubblicazione

Controlla questi indirizzi:

- `https://www.campaniataxi.it/`
- `https://www.campaniataxi.it/taxi-giugliano/`
- `https://www.campaniataxi.it/transfer-aeroporto-napoli/`
- `https://www.campaniataxi.it/ncc-campania/`
- `https://www.campaniataxi.it/tour-costiera-amalfitana/`
- `https://www.campaniataxi.it/sitemap.xml`
- `https://www.campaniataxi.it/robots.txt`

## 4. Google Search Console

1. Apri Google Search Console.
2. Aggiungi proprieta dominio: `campaniataxi.it`.
3. Verifica con record DNS TXT.
4. Invia sitemap:

   `https://www.campaniataxi.it/sitemap.xml`

5. Richiedi indicizzazione della homepage e delle pagine principali.

## 5. Google Business Profile

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

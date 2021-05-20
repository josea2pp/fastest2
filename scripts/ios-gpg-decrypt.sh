#!/bin/sh

gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
--output ./gc_keys.json ./gc_keys.json.gpg

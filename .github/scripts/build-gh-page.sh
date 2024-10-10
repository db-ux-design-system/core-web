#!/usr/bin/env bash

if [[ $NAME == "true" ]]; then
	echo "Erro: Missing NAME variable"
	exit 1
fi

echo "➕ Create public dir"
mkdir public

echo "📥 Get gh-pages tar"
curl -L https://github.com/"$OWNER_NAME"/"$REPO_NAME"/tarball/gh-pages --output gh-pages

echo "📦 Unpack Tar"
tar -zxf gh-pages -C public --strip-components 1

if [[ $RELEASE == "true" ]]; then
	echo "🔃 Change redirect"
	echo "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>DB UX Design System Core – latest version</title></head><body style=\"margin: 0;\"><iframe src=\"https://"$OWNER_NAME".github.io/"$REPO_NAME"/version/"$NAME"\" style=\"border: 0;width: 100vw;height: 100vh;\"></iframe></body></html>" > public/index.html
fi

echo "👣 Move out dir"
if [[ $PRE_RELEASE == "true" || $RELEASE == "true" ]]; then
	if [[ ! -d ./public/version ]]; then
		echo "    Make dir ./public/version"
		mkdir ./public/version
	fi
	if [[ -d ./public/version/"$NAME" ]]; then
		echo "    Remove dir ./public/version/$NAME"
		rm -rf ./public/version/"$NAME"
	fi
	mv ./out ./public/version/"$NAME"
	echo "    Moved dir out to ./public/version/$NAME"
else
	if [[ ! -d ./public/review ]]; then
		echo "    Make dir ./public/review"
		mkdir ./public/review
	fi
	if [[ -d ./public/review/"$NAME" ]]; then
		echo "    Remove dir ./public/review/$NAME"
		rm -rf ./public/review/"$NAME"
	fi
	mv ./out ./public/review/"$NAME"
	echo "    Moved dir out to ./public/review/$NAME"
fi

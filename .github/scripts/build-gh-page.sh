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
	echo "<meta http-equiv=\"refresh\" content=\"0; URL=https://"$OWNER_NAME".github.io/"$REPO_NAME"/version/"$NAME"\" />" > public/index.html
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
fi

serve-api:
	python3 manage.py runserver

make-migrations:
	python3 manage.py makemigrations

migrate:
	python3 manage.py migrate

test-api:
	python3 manage.py test

serve-ui-dev:
	cd ./ui && npm run dev

test-ui:
	cd ./ui && npm test

build-ui:
	cd ./ui && npm run build

serve-ui-preview:
	cd ./ui && npm run build && npm run preview

lint-ui:
	cd ./ui && npm run lint

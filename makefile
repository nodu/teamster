all: make-migrations migrate install-ui
.PHONEY: all

make-migrations:
	@printf "\n Creating Database Migrations... \n\n" && \
	python3 manage.py makemigrations
.PHONEY: make-migrations

migrate:
	@printf "\n Running Database Migrations... \n\n" && \
	python3 manage.py migrate
.PHONEY: migrate

install-ui:
	@printf "\n Installing UI dependencies... \n\n" && \
		cd ./ui && npm install
.PHONEY: install-ui

serve-api:
	python3 manage.py runserver 0.0.0.0:8000
.PHONEY: serve-api

serve-ui-dev:
	cd ./ui && npm run dev -- --host
.PHONEY: serve-ui-dev

serve-ui-preview: build-ui
	cd ./ui && npm run preview
.PHONEY: serve-ui-preview

test-api:
	python3 manage.py test
.PHONEY: test-api

lint-ui:
	cd ./ui && npm run lint
.PHONEY: lint-ui

test-ui:
	cd ./ui && npm test
.PHONEY: test-ui

build-ui:
	cd ./ui && npm run build
.PHONEY: build-ui

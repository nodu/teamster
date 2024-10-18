all: make-migrations migrate install-ui
.PHONEY: all

make-migrations:
	@printf "\n Creating Database Migrations... \n\n" && \
	cd ./api && python3 manage.py makemigrations
.PHONEY: make-migrations

migrate:
	@printf "\n Running Database Migrations... \n\n" && \
	cd ./api && python3 manage.py migrate
.PHONEY: migrate

install-api:
	@printf "\n Installing API dependencies... \n\n" && \
		cd ./api && poetry install
.PHONEY: install-ui

install-ui:
	@printf "\n Installing UI dependencies... \n\n" && \
		cd ./ui && npm install
.PHONEY: install-ui

serve-api:
	cd ./api && python3 manage.py runserver 0.0.0.0:8000
.PHONEY: serve-api

serve-ui-dev:
	cd ./ui && npm run dev -- --host
.PHONEY: serve-ui-dev

serve-ui-preview: build-ui
	cd ./ui && npm run preview
.PHONEY: serve-ui-preview

test-api:
	cd ./api && python3 manage.py test
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

docker-build-api:
	docker build -f api/Dockerfile -t nodu/teamster:api .
.PHONEY: docker-build-api

docker-build-ui:
	docker build -f ui/Dockerfile -t nodu/teamster:ui .
.PHONEY: docker-build-ui

docker-run-api:
	docker run --rm -p 8000:8000 nodu/teamster:api
.PHONEY: docker-run-api

docker-run-ui:
	docker run --rm -p 80:3000 nodu/teamster:ui
.PHONEY: docker-run-ui

docker-push-all:
	docker push nodu/teamster:api
	docker push nodu/teamster:ui
.PHONEY: docker-push-all

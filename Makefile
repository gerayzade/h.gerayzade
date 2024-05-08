ssh-dev:
	docker-compose -f docker/docker-compose.dev.yml exec h.gerayzade-dev /bin/bash

start-dev:
	docker-compose -f docker/docker-compose.dev.yml up --build -d

ssh-build:
	docker-compose -f docker/docker-compose.yml exec h.gerayzade /bin/bash

start-build:
	docker-compose -f docker/docker-compose.yml up --build -d

start-static:
	docker-compose -f docker/docker-compose.static.yml up --build -d

ssh-static:
	docker-compose -f docker/docker-compose.static.yml exec h.gerayzade-static /bin/bash

stop:
	docker-compose -f docker/docker-compose.yml down --remove-orphans

run-serve:
	node .output/server/index.mjs

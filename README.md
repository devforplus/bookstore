## 데이터베이스 내용을 확인할 수 없거나/데이터베이스 파일이 존재하지 않는 경우

Prisma가 데이터베이스를 설정하도록 명령할 수 있습니다.

우선 `.env` 파일에 다음과 같이 데이터베이스 URL을 작성했는지 확인하세요:

```
DATABASE_URL = "<DATABASE URL>"
```

이 때, `.env`는 `/backend` 폴더 내에 위치해야 합니다.

여전히 데이터베이스 내용을 확인할 수 없다면 다음의 명령을 통해 Prisma가 데이터베이스를 설정하도록 할 수 있습니다.

다만, 이 명령은 **데이터베이스 내용의 소실**을 동반할 수 있으니 주의하세요.

```bash
# NOTE: /backend 폴더에서 수행하세요
pnpm prisma db push
```

데이터 소실 없이 데이터베이스를 설정하려면 [Prisma Migrate](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev) 문서를 확인하세요.

## 데이터베이스 내용 확인하는 법

데이터베이스 내용은 현재 위치가 `프로젝트 루트 디렉토리`인 경우와 `/backend` 디렉토리인 경우로 나뉩니다.

1. `프로젝트 루트 디렉토리`인 경우: `pnpm studio` (미리 설정해둔 명령을 통해 Prisma Studio 기반의 시각화를 사용할 수 있습니다)
2. `/backend`인 경우: `pnpm prisma studio`
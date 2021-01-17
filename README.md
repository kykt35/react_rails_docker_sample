# react_rails_docker_sample

Nextjs + Rails 6 開発トレーンング用

## ディレクトリ構成

```bash
├── backend                     Rails APIサーバー
├── frontend                    Nextjs フロントエンド
└── docker-compose.yml
```

## 事前準備

- Docker インストール　(https://www.docker.com/community-edition)
- Docker Compose インストール (https://docs.docker.com/compose/install/)

## ローカルでの開発

### 環境変数の設定

/backend/.env および/frontend/.env で設定し docker に反映させる。  
.env ファイルがない場合は、それぞれの.env.example から.env を作成する

### Docker image ビルド

初回および Dockerfile 変更時のみ

```bash
docker-compose build
docker-compose up
```

### docker-compose 起動

```bash
docker-compose up
```

- backend url: http:localhost:3000
- frontend url: http:localhost:8000

### コマンドの実行

docker コンテナ内に入って実行 例：

```bash
docker-compose run --rm backend bash
root@d1fd073481cf:/usr/src/app# [command]
```

コンテナにコマンドを渡して実行

```bash
docker-compose run --rm backend [command]
```

### Docker コンテナ

- backend : Rails API サーバー
- frontend : Nextjs フロントエンド
- swagger : OpenAPI ドキュメント
- prism : API mock サーバー

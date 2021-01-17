# react_rails_docker_sample

Nextjs + Rails 6開発トレーンング用

## ディレクトリ構成

```bash
├── backend                     Rails APIサーバー
├── frontend                    Nextjs フロントエンド
└── docker-compose.yml
```

## 事前準備

* Docker インストール　(https://www.docker.com/community-edition)
* Docker Compose インストール (https://docs.docker.com/compose/install/)

## ローカルでの開発

### 環境変数の設定

/backend/.envおよび/frontend/.envで設定しdockerに反映させる。  
.envファイルがない場合は、それぞれの.env.exampleから.envを作成する
  
### Docker image ビルド

初回およびDockerfile変更時のみ

```bash
docker-compose build
docker-compose up
```
  
### docker-compose起動

```bash
docker-compose up
```

* backend url: http:localhost:3000
* frontend url: http:localhost:8000
  
### コマンドの実行

dockerコンテナ内に入って実行 例：

```bash
docker-compose run --rm backend bash
root@d1fd073481cf:/usr/src/app# [command]
```

コンテナにコマンドを渡して実行 

```bash
docker-compose run --rm backend [command]
```

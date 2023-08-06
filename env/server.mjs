
import { env as clientEnv, formatErrors } from "./client.mjs";
import { serverSchema } from "./schema.mjs";

const _serverEnv = serverSchema.safeParse(process.env);

// 必要な環境変数がない場合はエラーを投げる
if (!_serverEnv.success) {
    console.log("Invalid environment variables: \n",
    ...formatErrors(_serverEnv.error.format()));
    throw new Error ("Inavlid environment variables");
}

// NEXT_PUBLIC_で始まる環境変数はサーバーサイドで公開されてしまうのでエラーを投げる
for (let key of Object.keys(_serverEnv.data)) {
    if (key.startsWith("NEXT_PUBLIC_")) {
        console.warn("You are exposing a server-side env-variable: ", key);
        throw new Error("You are exposing a server-side env-variable");
    }
}

export const env = {..._serverEnv.data, ...clientEnv};
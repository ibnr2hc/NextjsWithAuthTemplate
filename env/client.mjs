import { clientEnv, clientSchema } from "./schema.mjs";

const _clientEnv = clientSchema.safeParse(clientEnv);

// エラーを整形する
export const formatErrors = (
    errors,
) =>
    Object.entries(errors)
        .map(([name, value]) => {
            if (value && "_errors" in value)
            return `${name}: ${value._errors.join(", ")}\n`;
        })
        .filter(Boolean)

// 必要な環境変数がない場合はエラーを投げる
if (!_clientEnv.success) {
    console.error("Invalid envionment variables: \n",
    ...formatErrors(_clientEnv.error.format()),
    );
    throw new Error("Invalid environment variables");
}

// NEXT_PUBLIC_で始まる環境変数はクライアントサイドで公開されてしまうのでエラーを投げる
for (let key of Object.keys(_clientEnv.data)) {
    if (!key.startsWith("NEXT_PUBLIC_")) {
        console.warn(`Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC'`);
        throw new Error("Invalid public environment variable name");
    }
}

export const env = _clientEnv.data;
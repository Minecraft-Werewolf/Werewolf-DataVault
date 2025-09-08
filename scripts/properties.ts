/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */

export type SemVer = {
    major: number; minor: number; patch: number;
    prerelease?: string | undefined; // "preview.3" / "rc.1"
    build?: string | undefined;      // "abc123" (commit)
};

/**
 * 文末に # が記述されている箇所を適宜修正して使用します。  
 * Modify and use where # is written at the end of the sentence as appropriate
 */

export const properties = {
    id: "werewolf-datavault", // a-z & 0-9 - _
    metadata: { 
        /** 製作者の名前 */
        authors: [
            //"shizuku86"
        ]
    },
    header: {
        name: "Werewolf-DataVault",
        description: "serves as the persistent data vault for the Werewolf game.",
        version: { 
            major: 1, 
            minor: 0, 
            patch: 0,
            prerelease: "dev.1",
            // build: "abc123",
        },
        min_engine_version: [ 1,21,100 ],
        uuid: "28040000-e17d-4e07-a37c-6ad2d78b1b91"
    },
    resourcepack: {
        name: "Use BP Name",
        description: "Use BP Description",
        uuid: "c781b75c-caed-4604-b4e7-6c42e0e7dd48",
        module_uuid: "164022d6-2bd4-45a7-8ea9-f6ef7c6b2454",
    },
    modules: [
        {
            type: "script",
			language: "javascript",
			entry: "scripts/index.js",
            version: "header.version",
            uuid: "e594bcec-3aa7-46a6-875c-8589fdd2cae7"
        }
    ],
    dependencies: [
		{
			module_name: "@minecraft/server",
			version: "2.1.0"
		},
		{
			module_name: "@minecraft/server-ui",
			version: "2.0.0"
		}
	],
    /** 前提アドオン */
    requiredAddons: {
        "kairo": "1.0.0-dev.1", // "kairo": "1.0.0"
        "werewolf-gamemanager": "1.0.0-dev.1"
    },
    tags: [
        "official",
        "stable",
    ],
}

/**
 * "official" を非公式に付与することは許可されていません。
 * 公認のアドオンには "approved" を付与します。
 * It is not allowed to assign "official" unofficially.
 * For approved addons, assign "approved".
 * 
 */
export const supportedTags: string[] = [
    "official",
    "approved",
    "stable",
    "experimental"
]
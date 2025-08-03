/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */

export const properties = {
    metadata: { 
        /** 製作者の名前 */
        authors: [
            "静空"
        ]
    },
    header: {
        name: "Werewolf-DataVault",
        description: "",
        min_engine_version: [ 1,21,90 ],
        version: [ 1,0,0 ],
        uuid: "f2ad864a-2775-478b-b408-6de33956e43e"
    },
    modules: [
        {
            type: "script",
			language: "javascript",
			entry: "scripts/index.js",
            version: "header.version",
            uuid: "d07c9aeb-7c3b-4e01-ab35-5f174414d54e"
        }
    ],
    dependencies: [
		{
			module_name: "@minecraft/server",
			version: "2.0.0"
		},
		{
			module_name: "@minecraft/server-ui",
			version: "2.0.0"
		}
	],
    /** 前提アドオン */
    requiredAddons: {
        /**
         * name: [version]
         */
    },
}
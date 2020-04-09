/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';

export interface IconPath {
	dark: string;
	light: string;
}

export class IconPathHelper {
	private static context: vscode.ExtensionContext;

	public static add: IconPath;
	public static edit: IconPath;
	public static delete: IconPath;
	public static openInTab: IconPath;
	public static heart: IconPath;
	public static copy: IconPath;
	public static collapseUp: IconPath;
	public static collapseDown: IconPath;
	public static postgres: IconPath;
	public static computeStorage: IconPath;
	public static connection: IconPath;
	public static backup: IconPath;
	public static properties: IconPath;
	public static networking: IconPath;

	public static setExtensionContext(context: vscode.ExtensionContext) {
		IconPathHelper.context = context;
		IconPathHelper.add = {
			light: IconPathHelper.context.asAbsolutePath('images/add.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/add.svg')
		};
		IconPathHelper.edit = {
			light: IconPathHelper.context.asAbsolutePath('images/edit.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/edit.svg')
		};
		IconPathHelper.delete = {
			light: IconPathHelper.context.asAbsolutePath('images/delete.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/delete.svg')
		};
		IconPathHelper.openInTab = {
			light: IconPathHelper.context.asAbsolutePath('images/open-in-tab.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/open-in-tab.svg')
		};
		IconPathHelper.heart = {
			light: IconPathHelper.context.asAbsolutePath('images/heart.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/heart.svg')
		};
		IconPathHelper.copy = {
			light: IconPathHelper.context.asAbsolutePath('images/copy.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/copy.svg')
		};
		IconPathHelper.collapseUp = {
			light: IconPathHelper.context.asAbsolutePath('images/collapse-up.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/collapse-up-inverse.svg')
		};
		IconPathHelper.collapseDown = {
			light: IconPathHelper.context.asAbsolutePath('images/collapse-down.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/collapse-down-inverse.svg')
		};
		IconPathHelper.postgres = {
			light: IconPathHelper.context.asAbsolutePath('images/Icon-databases-131-Azure-Database-PostgreSQL-Server.svg'),
			dark: IconPathHelper.context.asAbsolutePath('images/Icon-databases-131-Azure-Database-PostgreSQL-Server.svg')
		};
		IconPathHelper.computeStorage = {
			light: context.asAbsolutePath('images/Icon-general-12-Billing.svg'),
			dark: context.asAbsolutePath('images/Icon-general-12-Billing.svg')
		};
		IconPathHelper.connection = {
			light: context.asAbsolutePath('images/connections.svg'),
			dark: context.asAbsolutePath('images/connections.svg')
		};
		IconPathHelper.backup = {
			light: context.asAbsolutePath('images/Icon-migrate-282-Recovery-Services-Vaults.svg'),
			dark: context.asAbsolutePath('images/Icon-migrate-282-Recovery-Services-Vaults.svg')
		};
		IconPathHelper.properties = {
			light: context.asAbsolutePath('images/properties.svg'),
			dark: context.asAbsolutePath('images/properties.svg')
		};
		IconPathHelper.networking = {
			light: context.asAbsolutePath('images/Icon-security-241-Security-Center.svg'),
			dark: context.asAbsolutePath('images/Icon-security-241-Security-Center.svg')
		};
	}
}

export namespace cssStyles {
	export const text = { 'user-select': 'text', 'cursor': 'text' };
	export const tableHeader = { ...text, 'text-align': 'left', 'border': 'none' };
	export const tableRow = { ...text, 'border-top': 'solid 1px #ccc', 'border-bottom': 'solid 1px #ccc', 'border-left': 'none', 'border-right': 'none' };
	export const hyperlink = { 'user-select': 'text', 'cursor': 'pointer', 'color': '#0078d4', 'text-decoration': 'underline' };
}

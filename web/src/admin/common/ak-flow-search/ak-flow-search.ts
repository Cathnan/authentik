import { customElement } from "lit/decorators.js";

import type { Flow } from "@goauthentik/api";

import FlowSearch from "./FlowSearch";

/**
 * @element ak-flow-search
 *
 * The default flow search experience.
 */

@customElement("ak-flow-search")
export class AkFlowSearch<T extends Flow> extends FlowSearch<T> {}

declare global {
    interface HTMLElementTagNameMap {
        "ak-flow-search": AkFlowSearch<Flow>;
    }
}

export default AkFlowSearch;

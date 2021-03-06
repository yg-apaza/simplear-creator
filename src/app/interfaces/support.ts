type Resource = {
    poly: boolean,
    pfmarker: boolean,
    pnmarker: boolean
}

type Event = {
    marker_is_detected: boolean
}

type Action = {
    augment_resource: boolean
}

export interface Support {
    framework: string,
    resources: Resource,
    events: Event,
    actions: Action
}
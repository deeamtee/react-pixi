import Reconciler from 'react-reconciler';
import * as PIXI from "pixi.js";

const hostConfig = {
    now: Date.now,
    supportsMutation: true,

    shouldSetTextContent: (type, props) => { // 3, 5
        return (
            typeof props.dangerouslySetInnerHTML === 'object' &&
            props.dangerouslySetInnerHTML !== null &&
            props.dangerouslySetInnerHTML.__html !== null
        );
    },
    createInstance: (type, props) => { // 6
        let instance;

        if (type === 'container') {
            instance = new PIXI.Container();
        } else if (type === 'sprite') {
            const { x = 0, y = 0, width, height } = props;

            instance = new PIXI.Sprite(props.texture);

            if (width && height) {
                instance.width = width;
                instance.height = height;
            }

            if (props.onKeyDown) {
                document.addEventListener('keypress', props.onKeyDown)
            }
            instance.x = x;
            instance.y = y;
        } else if (type === 'text') {
            instance = new PIXI.Text(props.text, props.style, props.canvas);
        } else {
            throw new Error(`Type ${type} is not supported!`)
        }

        return instance;
    },
    createTextInstance(text) {
        return document.createTextNode(text);
    },
    appendInitialChild: (parent, child) => {
        parent.addChild(child);
    },
    appendChildToContainer: (container, child) => {
        container.addChild(child);
    },
    removeChild: (parentInstance, child) => {
        child.removeChild();
    },
    removeChildFromContainer: (container, child) => {
        child.removeChild();
    },
    clearContainer: (container) => {
        container.innerHTML = '';
    },
    prepareUpdate: (instance, type, oldProps, newProps) => newProps,
    commitUpdate: (instance, updatePayload, type, oldProps, newProps) => {
        if (updatePayload) {
            instance.x = updatePayload.x
            instance.y = updatePayload.y
        }
    },
    getPublicInstance: (instance) => {
        return instance;
    },
    getRootHostContext: rootContainerInstance => {
        return null;
    }, // 1
    getChildHostContext: (parentHostContext, type, rootContainerInstance) => { }, // 2, 4
    prepareForCommit: rootContainerInstance => { },
    resetAfterCommit: rootContainerInstance => { },
    finalizeInitialChildren: () => false // 7
};

export const render = (jsx, rootNode) => {
    const reconciler = Reconciler(hostConfig);
    const container = reconciler.createContainer(rootNode);
    reconciler.updateContainer(jsx, container, null, () => { });
}
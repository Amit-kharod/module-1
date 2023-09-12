    interface Tour {
        leftImg?: any,
        centerImg: any,
        rightImg?: any,
        storyDesc: string,
        buttonDesc?: string,
        isNextButton: boolean,
        noOfImg:number
    }
    export const tourConfig : Tour[] = [
        {
            leftImg: require('@/assets/tour/scene1Left.png').default, // Provide the image path directly as a string or use require with .default
            centerImg: require('@/assets/tour/scene1.png').default,
            rightImg: require('@/assets/tour/scene1Right.png').default,
            storyDesc: "In a distant future, a girl named Rhea was exploring her backyard when she discovered an underground lab. Upon entering the lab, she found it filled with high-end technical tools and devices. As she gradually explored the lab, she stumbled upon a box with the word caution written on it.",
            buttonDesc: "Click on the box to discover what's inside.",
            isNextButton: false,
            noOfImg:3,
        },
        {
            leftImg: require('@/assets/tour/scene2left.png').default,
            centerImg: require('@/assets/tour/scene2.png').default,
            rightImg: require('@/assets/tour/scene2right.png').default,
            storyDesc: "Rhea opened the box and found an ancient device, along with a letter containing instructions on how to operate it. She realised that the device could open a portal to the multiverse, allowing her to journey to different universes.",
            buttonDesc: "Click on the device to activate the multiverse portal",
            isNextButton: false,
            noOfImg:3
        },
        {
            centerImg: require('@/assets/tour/scene3.png').default,
            storyDesc: " She realised that the device could open a portal to the multiverse, allowing her to journey to different universes.",
            isNextButton: false,
            noOfImg:1
        },
    ]
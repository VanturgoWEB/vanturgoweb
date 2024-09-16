import { useEffect, useRef, useState } from "react";

type movingProps = {
	text: string;
};
export default function MovingText(props: movingProps) {
	var movingString = "";
	for (let index = 0; index < 5; index++) {
		movingString += props.text + "  ·  ";
	}
	movingString += props.text;

    var movingString = "";
	for (let index = 0; index < 5; index++) {
		movingString += props.text + "  ·  ";
	}
	movingString += props.text;

const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    if (!marqueeElement) return;

    const marqueeWidth = marqueeElement.scrollWidth;

    // Animation logic
    const animate = () => {
      const firstChild = marqueeElement.firstChild as HTMLElement;

      // Scroll by a small increment (pixel by pixel)
      marqueeElement.scrollLeft += 1;

      // Once the first child is completely out of view, reset its position
      if (marqueeElement.scrollLeft >= firstChild.offsetWidth) {
        // console.log("removed child")
        marqueeElement.scrollLeft = 0;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);
    
	return (
		<div className="bg-primary py-7 text-white  max-w-none text-nowrap text-opacity-60 overflow-hidden" ref={marqueeRef}>
			<span className="animate-infinite-scroll ">{movingString}</span>
			<span className="animate-infinite-scroll">{movingString}</span>
			<span className="animate-infinite-scroll">{movingString}</span>
		</div>
	);
}

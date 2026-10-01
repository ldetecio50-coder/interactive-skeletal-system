const parts = [
    ["Skull", "Protects the brain and supports the structures of the face.", 50, 8],
    ["Cranium", "The portion of the skull that surrounds and protects the brain.", 49, 13],
    ["Mandible", "The lower jaw bone. It helps with chewing and speaking.", 50, 15],
    ["Cervical Vertebrae (C1–C7)", "Seven neck vertebrae that support the head and allow neck movement.", 50, 18],
    ["Thoracic Vertebrae (T1–T12)", "Twelve vertebrae in the chest region that connect with the ribs and help protect the thoracic organs.", 50, 29],
    ["Lumbar Vertebrae (L1–L5)", "Five large lower-back vertebrae that support much of the body's weight.", 50, 34],
    ["Sacrum", "A fused bone at the base of the vertebral column that connects the spine with the pelvic girdle.", 50, 42],
    ["Coccyx", "The small terminal part of the vertebral column, commonly called the tailbone.", 50, 44],
    ["Clavicle", "The collarbone. It connects the sternum to the scapula and helps position the shoulder.", 42, 20],
    ["Manubrium", "The upper part of the sternum. It connects with the clavicles and upper ribs.", 50, 22],
    ["Scapula", "The shoulder blade. It connects the upper limb to the trunk and provides muscle attachment.", 38, 22],
    ["Sternum", "The breastbone at the front of the chest. It helps protect the heart and lungs.", 50, 27],
    ["Ribs", "Twelve pairs of curved bones that form the rib cage and help protect organs in the chest.", 43, 28],
    ["Humerus", "The long bone of the upper arm, extending from the shoulder to the elbow.", 31, 31],
    ["Ulna", "One of the two forearm bones. It lies on the little-finger side and forms part of the elbow.", 29, 39],
    ["Radius", "One of the two forearm bones. It lies on the thumb side and helps the forearm rotate.", 34, 39],
    ["Carpals", "Eight small wrist bones that provide flexibility and connect the forearm to the hand.", 25, 46],
    ["Metacarpals", "Five bones forming the framework of the palm of each hand.", 22, 49],
    ["Phalanges (Hand)", "The bones of the fingers. Each finger has three phalanges except the thumb, which has two.", 19, 52],
    ["Pelvic Girdle", "The hip region that connects the lower limbs to the axial skeleton and helps support the body.", 45, 42],
    ["Femur", "The thigh bone and the longest, strongest bone in the human body.", 43, 57],
    ["Patella", "The kneecap. It protects the knee joint and helps the thigh muscles work efficiently.", 44, 70],
    ["Tibia", "The larger, weight-bearing bone of the lower leg, commonly called the shinbone.", 43, 79],
    ["Fibula", "The slender bone on the outer side of the lower leg that helps stabilize the ankle.", 47, 79],
    ["Tarsals", "Seven bones forming the rear part of the foot and ankle region.", 43, 91],
    ["Metatarsals", "Five long bones forming the main framework of the foot between the tarsals and toe bones.", 45, 94],
    ["Phalanges (Foot)", "The bones of the toes. They help with balance and movement.", 48, 96]
];

const hotspots = document.getElementById("hotspots");
const buttons = document.getElementById("partButtons");
const nameBox = document.getElementById("partName");
const descriptionBox = document.getElementById("partDescription");

function selectPart(index) {
    const part = parts[index];

    nameBox.textContent = part[0];
    descriptionBox.textContent = part[1];

    document.querySelectorAll(".hotspot").forEach((button, i) => {
        button.classList.toggle("active", i === index);
    });

    document.querySelectorAll(".part-button").forEach((button, i) => {
        button.classList.toggle("active", i === index);
    });
}

parts.forEach((part, index) => {
    const hotspot = document.createElement("button");
    hotspot.type = "button";
    hotspot.className = "hotspot";
    hotspot.title = part[0];
    hotspot.setAttribute("aria-label", part[0]);
    hotspot.style.left = part[2] + "%";
    hotspot.style.top = part[3] + "%";
    hotspot.addEventListener("click", () => selectPart(index));
    hotspots.appendChild(hotspot);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "part-button";
    button.textContent = part[0];
    button.addEventListener("click", () => selectPart(index));
    buttons.appendChild(button);
});

selectPart(0);

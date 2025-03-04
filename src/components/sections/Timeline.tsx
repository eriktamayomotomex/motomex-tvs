import { Text, Box } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { FaMotorcycle, FaTrophy, FaIndustry, FaHandshake } from "react-icons/fa";
import { MdEmojiEvents, MdVerified } from "react-icons/md";
import { BsFillAwardFill } from "react-icons/bs";

const timelineEvents = [
  {
    year: "1911",
    title: "Inicio de Motomex",
    description: "Inicia como compañía de transporte.",
    icon: <FaIndustry size={20} />,
  },
  {
    year: "1978",
    title: "Fabricación de motocicletas",
    description: "Inicia fabricación de motocicletas de 2 ruedas.",
    icon: <FaMotorcycle size={20} />,
  },
  {
    year: "2002",
    title: "Premio Deming",
    description: "Gana el prestigioso premio Deming.",
    icon: <FaTrophy size={20} />,
  },
  {
    year: "2006",
    title: "TVS Apache",
    description:
      "Lanzamiento de TVS Apache, siendo la moto del año y ganadora de 6 premios en la India.",
    icon: <MdEmojiEvents size={20} />,
  },
  {
    year: "2013",
    title: "BMW Motorrad",
    description: "Acuerdo de cooperación con BMW Motorrad.",
    icon: <FaHandshake size={20} />,
  },
  {
    year: "2016",
    title: "Premio J.D. Power",
    description:
      "Reconocida por Máxima Satisfacción del Cliente en los Premios J.D. Power.",
    icon: <MdVerified size={20} />,
  },
  {
    year: "2017",
    title: "Apache RR310",
    description: "Lanzamiento de Apache RR310.",
    icon: <FaMotorcycle size={20} />,
  },
  {
    year: "2023",
    title: "Bike India Awards",
    description: "Mejor fabricante de 2 ruedas del año en los Bike India Awards.",
    icon: <BsFillAwardFill size={20} />,
  },
];

export default function Timeline() {
  return (
    <Box maxW="800px" mx="auto" my={8}>
      <TimelineRoot>
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineConnector>{event.icon}</TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontWeight="bold" color="red.500">
                {event.year}
              </TimelineTitle>
              <TimelineDescription fontWeight="bold"color="black">
                {event.title}
              </TimelineDescription>
              <Text textStyle="sm"  color="black">
                {event.description}
               </Text>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineRoot>
    </Box>
  );
}

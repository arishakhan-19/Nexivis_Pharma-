import VisionSection from "../components/VisionSection";
import VisionContent from "../components/VisionContent";

export default function VisionPage() {
    return (
        <main>
            <VisionSection />

            {/* Dynamic Vision Content replacing static images */}
            <VisionContent />
        </main>
    );
}

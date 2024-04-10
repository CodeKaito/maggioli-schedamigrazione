import React from "react";
import { Container, Image } from "react-bootstrap";

export default function Basic() {
  return (
    <Container>
        <h3 className="mt-2">Scheda Migrazione in Cloud</h3>
        <Image src="https://raw.githubusercontent.com/CodeKaito/maggioli-schedamigrazione/main/src/assets/maggioli-cloud-hero.png?token=GHSAT0AAAAAACPKO4CWYH67NTOJVBWFOQCOZQWSF2A" className="mt-3" alt="maggioli-cloud-hero" height={500} width={1000} />
    </Container>
  );
}
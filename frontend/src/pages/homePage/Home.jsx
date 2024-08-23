import React from 'react'
import { Container, Row, Col, Image, Jumbotron, Card } from 'react-bootstrap';
const Home = () => {
  return (
    <Container fluid className="p-0">
    {/* Header Section with Logo and Titles */}
    <Container className="text-center bg-light py-4 mb-4">
      {/* Replace 'logo.png' with the path to the Nepal Government logo */}
      <Image src="https://upload.wikimedia.org/wikipedia/commons/2/23/Emblem_of_Nepal.svg" alt="नेपाल सरकार" fluid className="mb-3" style={{ maxWidth: '150px' }} />
      <h1 className="fs-6 fw-bold">नेपाल सरकार</h1>
      <h2 className="fs-4 ">भौतिक पूर्वाधार तथा यातायात मन्त्रालय</h2>
      <h3 className="fs-3 ">यातायात व्यवस्था विभाग</h3>
      <h4 className="fs-2 fw-bold">सवारी परीक्षण कार्यालय, टेकु काठमाडौँ</h4>
    </Container>

    {/* Content Section */}
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Text className="lead">
                यातायात व्यवस्थापनको कार्य गर्नका लागि वि.सं. २०४१ मा यातायात व्यवस्था विभागको स्थापना भएको हो ।
                सवारी तथा यातायात व्यवस्था ऐन, २०४९, सवारी तथा यातायात व्यवस्था नियमावली, २०५४ को नीतिगत व्यवस्था
                वमोजिम मानिसको आवागमन र वस्तुहरुको ओसारपोसारको लागि सुरक्षित, भरपर्दो र सुलभ यातायात सेवा उपलब्ध
                गराउनु विभाग र मातहत कार्यालयहरुको मुख्य उद्देश्य रहेको छ ।
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
        </Container>
  )
}

export default Home